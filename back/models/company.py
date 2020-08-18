from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def __str__(self):
        return f"{self.name}"

    def __repr__(self):
        return self.__str__()
