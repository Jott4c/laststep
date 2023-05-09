from rest_framework import permissions
from rest_framework.views import Request, View


class IsActiveTrue(permissions.BasePermission):
    def has_permission(self, request, view: View) -> bool:
        return request.user.is_authenticated and request.user.is_active
