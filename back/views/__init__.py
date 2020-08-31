from .login import current_user, UserList, ObtainFoxJWTToken  # noqa F401
from .dashboard import Dashboard  # noqa F401
from .projects import ProjectList, ProjectCreate, ProjectDetail  # noqa F401
from .client_managers import (  # noqa F401
    ClientManagerList,
    ClientManagerDetail,
    ClientManagerCreate,
)  # noqa F401
from .contractors import ContractorList, ContractorDetail, ContractorCreate  # noqa F401
from .workers import (  # noqa F401
    WorkerList,
    WorkerDetail,
    WorkerCreate,
    WorkerDocDownload,
)  # noqa F401
from .ptw import ptw  # noqa F401
from .documents import (  # noqa F401
    DocumentList,
    DocumentDetail,
    DocumentCreate,
    DocumentDownload,
)  # noqa F401
from .worker_documents import (  # noqa F401
    WorkerDocumentList,
    WorkerDocumentDetail,
    WorkerDocumentCreate,
    WorkerDocumentDownload,
)  # noqa F401
