from django.db import models


class Worker(models.Model):
    name = models.CharField(max_length=64)
    contractor = models.ForeignKey(
        "Contractor", on_delete=models.CASCADE, name="contractor"
    )
    birthday = models.DateField()
    company = models.CharField(max_length=64)  # TODO: check if this field is needed
    card_number_id = models.CharField(max_length=64)
    license_number = models.CharField(max_length=64)
    passport = models.CharField(max_length=64, null=True)
    safety_green_card = models.CharField(max_length=64)
    position_in_company = models.CharField(max_length=64)

    def __str__(self):
        return f'{self.name}'
