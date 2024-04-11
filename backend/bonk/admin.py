from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from bonk.models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ["username", "display_name"]


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
