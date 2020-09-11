from django.shortcuts import get_object_or_404


class DocumentFileService:
    def __init__(self, pk, DocumentClass):
        self.document = get_object_or_404(DocumentClass, pk=pk)

    def read(self):
        self.document.file.open("rb")
        return self.document.file.read()

    @property
    def name(self):
        return self.document.file.name
