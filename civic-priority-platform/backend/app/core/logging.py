import logging
import sys
from contextvars import ContextVar
from uuid import uuid4

request_id_context: ContextVar[str] = ContextVar("request_id", default="")


def get_request_id() -> str:
    return request_id_context.get()


def set_request_id(request_id: str | None = None) -> str:
    value = request_id or str(uuid4())
    request_id_context.set(value)
    return value


class RequestContextFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        record.request_id = get_request_id()
        return True


def configure_logging(level: str = "INFO") -> None:
    formatter = logging.Formatter(
        fmt="%(asctime)s | %(levelname)s | request_id=%(request_id)s | %(name)s | %(message)s"
    )
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(formatter)
    handler.addFilter(RequestContextFilter())

    root_logger = logging.getLogger()
    root_logger.handlers.clear()
    root_logger.addHandler(handler)
    root_logger.setLevel(level.upper())
