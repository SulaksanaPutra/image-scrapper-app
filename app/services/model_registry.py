import os
import json
import shutil
from typing import Optional, Dict, Any, List
from app.config import settings

class ModelRegistry:
    def __init__(self, registry_dir: Optional[str] = None):
        self.registry_dir = registry_dir or settings.MODEL_REGISTRY_DIR
        os.makedirs(self.registry_dir, exist_ok=True)
        self.active_symlink = os.path.join(self.registry_dir, "active")

    def get_version_dir(self, version: str) -> str:
        return os.path.join(self.registry_dir, version)

    def create_version_dir(self, version: str) -> str:
        version_dir = self.get_version_dir(version)
        os.makedirs(version_dir, exist_ok=True)
        return version_dir

    def list_versions(self) -> List[str]:
        if not os.path.exists(self.registry_dir):
            return []
        dirs = [
            d for d in os.listdir(self.registry_dir)
            if os.path.isdir(os.path.join(self.registry_dir, d)) and d != "active"
        ]
        return sorted(dirs)

    def get_active_version_dir(self) -> Optional[str]:
        if os.path.exists(self.active_symlink):
            if os.path.islink(self.active_symlink):
                return os.readlink(self.active_symlink)
            # If pointer text file or standard dir instead of symlink (Windows compatibility)
            if os.path.isfile(self.active_symlink):
                with open(self.active_symlink, "r", encoding="utf-8") as f:
                    target = f.read().strip()
                    if os.path.exists(target):
                        return target
            elif os.path.isdir(self.active_symlink):
                return self.active_symlink
        
        # Fallback to configured active version or latest available version
        default_dir = self.get_version_dir(settings.ACTIVE_MODEL_VERSION)
        if os.path.exists(default_dir):
            return default_dir

        versions = self.list_versions()
        if versions:
            return self.get_version_dir(versions[-1])

        return None

    def set_active_version(self, version: str) -> bool:
        version_dir = self.get_version_dir(version)
        if not os.path.exists(version_dir):
            return False

        if os.path.exists(self.active_symlink) or os.path.islink(self.active_symlink):
            try:
                if os.path.islink(self.active_symlink) or os.path.isfile(self.active_symlink):
                    os.remove(self.active_symlink)
                elif os.path.isdir(self.active_symlink):
                    shutil.rmtree(self.active_symlink)
            except Exception:
                pass

        try:
            os.symlink(version_dir, self.active_symlink, target_is_directory=True)
        except (OSError, NotImplementedError, AttributeError):
            # Fallback for Windows without admin symlink privileges: write pointer file
            with open(self.active_symlink, "w", encoding="utf-8") as f:
                f.write(version_dir)
        return True

    def save_metrics(self, version: str, metrics: Dict[str, Any]):
        version_dir = self.get_version_dir(version)
        metrics_file = os.path.join(version_dir, "metrics.json")
        with open(metrics_file, "w", encoding="utf-8") as f:
            json.dump(metrics, f, indent=2)

    def load_metrics(self, version: str) -> Optional[Dict[str, Any]]:
        version_dir = self.get_version_dir(version)
        metrics_file = os.path.join(version_dir, "metrics.json")
        if os.path.exists(metrics_file):
            with open(metrics_file, "r", encoding="utf-8") as f:
                return json.load(f)
        return None

model_registry = ModelRegistry()
