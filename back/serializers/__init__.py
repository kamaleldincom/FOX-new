from .auth_serializer import UserSerializer, UserSerializerWithToken  # noqa F401
from .dashboard import DashboardSerializer  # noqa F401
from .project import ProjectSerializer, ProjectListSerializer  # noqa F401
from .client_manager import (  # noqa F401
    ClientManagerSerializer,
    ClientManagerListSerializer,
)
from .contractor import ContractorSerializer, ContractorListSerializer  # noqa F401
from .worker import WorkerListSerializer, WorkerSerializer  # noqa F401
from .document import DocumentListSerializer, DocumentSerializer  # noqa F401
from .worker_document import (  # noqa F401
    WorkerDocumentSerializer,
    WorkerDocumentListSerializer,
)
from .approval import ApprovalListSerializer, ApprovalSerializer  # noqa F401
from .company import CompanyDocsSerializer
