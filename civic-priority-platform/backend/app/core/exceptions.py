from typing import Any


class CivicoException(Exception):
    status_code: int = 500
    code: str = "CIVICO_ERROR"

    def __init__(self, message: str, *, details: dict[str, Any] | None = None) -> None:
        self.message = message
        self.details = details or {}
        super().__init__(message)


class IssueNotFound(CivicoException):
    status_code = 404
    code = "ISSUE_NOT_FOUND"


class AnalysisJobNotFound(CivicoException):
    status_code = 404
    code = "ANALYSIS_JOB_NOT_FOUND"


class ReportNotFound(CivicoException):
    status_code = 404
    code = "REPORT_NOT_FOUND"


class PortfolioNotFound(CivicoException):
    status_code = 404
    code = "PORTFOLIO_NOT_FOUND"


class InvalidSpatialQuery(CivicoException):
    status_code = 400
    code = "INVALID_SPATIAL_QUERY"


class DataSourceUnavailable(CivicoException):
    status_code = 503
    code = "DATA_SOURCE_UNAVAILABLE"


class ExternalToolUnavailable(CivicoException):
    status_code = 503
    code = "EXTERNAL_TOOL_UNAVAILABLE"


class OptimizationInfeasible(CivicoException):
    status_code = 422
    code = "OPTIMIZATION_INFEASIBLE"


class StorageUnavailable(CivicoException):
    status_code = 503
    code = "STORAGE_UNAVAILABLE"


class InvalidUpload(CivicoException):
    status_code = 400
    code = "INVALID_UPLOAD"


class UnauthorizedOperation(CivicoException):
    status_code = 401
    code = "UNAUTHORIZED"


class ForbiddenOperation(CivicoException):
    status_code = 403
    code = "FORBIDDEN"
