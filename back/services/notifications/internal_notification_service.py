from back.models import Message, FoxUser


class InternalNotificationService:
    def __init__(self, message_text, receivers):
        self.message_text = message_text
        self.receivers = receivers

    def _convert_receivers_to_fox_users(self):
        receiver_pks = [receiver.pk for receiver in self.receivers]
        self.receivers = FoxUser.objects.filter(pk__in=receiver_pks)

    def emit(self):
        self._convert_receivers_to_fox_users()
        message = Message(text=self.message_text)
        message.save()
        message.receivers.set(self.receivers)
