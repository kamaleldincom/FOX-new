from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import ClientAdmin


# class UserCreateForm(UserCreationForm):
#     class Meta:
#         model = User
#         fields = (
#             "username",
#             "email",
#         )


# class UserAdmin(UserAdmin):
#     add_form = UserCreateForm

#     add_fieldsets = (
#         (
#             None,
#             {
#                 "classes": ("wide",),
#                 "fields": ("username", "email", "password1", "password2",),
#             },
#         ),
#     )


# # class ClientAdminCreateForm(UserCreationForm):
# #     class Meta:
# #         model = ClientAdmin
# #         fields = (
# #             "user.username",
# #             "user.email",
# #         )


# # class ClientAdminAdmin(UserAdmin):
# #     add_form = ClientAdminCreateForm

# #     add_fieldsets = (
# #         (None, {"classes": ("wide",), "fields": ("user.username", "user.email",)},),
# #     )


# # Re-register UserAdmin
# admin.site.unregister(User)
# admin.site.register(User, UserAdmin)

# admin.site.register(ClientAdmin, ClientAdminAdmin)
