from django.db.models.signals import post_save
from back.services import send_mail_on_creation
from back.models import ClientAdmin, ClientManager, Contractor

post_save.connect(send_mail_on_creation, sender=ClientManager)
post_save.connect(send_mail_on_creation, sender=ClientAdmin)
post_save.connect(send_mail_on_creation, sender=Contractor)
