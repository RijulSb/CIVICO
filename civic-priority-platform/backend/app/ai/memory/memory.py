import asyncio
from copy import deepcopy
from typing import Any


class MemoryStore:
    """In-process memory abstraction for AI workflows."""

    def __init__(self) -> None:
        self._store: dict[str, list[dict[str, Any]]] = {}
        self._lock = asyncio.Lock()

    async def add(self, key: str, value: dict[str, Any]) -> None:
        if not key:
            raise ValueError("Memory key must not be empty.")
        async with self._lock:
            self._store.setdefault(key, []).append(deepcopy(value))

    async def get(self, key: str) -> list[dict[str, Any]]:
        async with self._lock:
            return deepcopy(self._store.get(key, []))
