import jwt
import datetime
from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework.exceptions import NotAuthenticated
from back.models import Document
from .document_file_service import DocumentFileService


class DocumentFileJWTCreator:
    def __init__(self, pk, DocumentClass=Document):
        self.pk = pk
        self.DocumentClass = DocumentClass

    @property
    def parts(self):
        token = self._generate_jwt_token()
        return token.decode("utf-8").split(".")

    @property
    def doc_type(self):
        doc = self._get_doc()
        return doc.file.name.split(".")[-1]

    def _generate_jwt_token(self):
        payload = {
            "id": self.pk,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=3),
        }
        return jwt.encode(
            payload=payload, key=settings.DISPLAY_FILE_KEY.encode(), algorithm="HS256"
        )

    def _get_doc(self):
        return get_object_or_404(self.DocumentClass, pk=self.pk)


class DocumentFileJWTReader(DocumentFileService):
    def __init__(self, part1, part2, part3, DocumentClass=Document):
        self.part1 = part1
        self.part2 = part2
        self.part3 = part3
        super(DocumentFileJWTReader, self).__init__(
            self._get_id_from_jwt(), DocumentClass
        )

    def _get_id_from_jwt(self):
        token = self._concat_jwt_token()
        try:
            payload = jwt.decode(
                token, key=settings.DISPLAY_FILE_KEY.encode(), algorithm="HS256"
            )
        except jwt.ExpiredSignatureError:
            raise NotAuthenticated("Token expired")
        return payload.get("id")

    def _concat_jwt_token(self):
        return ".".join((self.part1, self.part2, self.part3))
