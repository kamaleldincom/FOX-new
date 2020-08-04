from django.db import models


class DocumentItem(models.Model):
    template_item = models.ForeignKey(
        "TemplateItem", on_delete=models.CASCADE, name="doc_items"
    )
    document = models.ForeignKey("Document", on_delete=models.CASCADE, name="items")
    text_value = models.TextField(null=True)
    str_value = models.CharField(max_length=64, null=True)
