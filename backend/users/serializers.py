from rest_framework import serializers
from .models import User, Address
from rest_framework.validators import UniqueValidator


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = (
            "city",
            "state",
        )


class UserSerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=False, allow_null=True)
    email = serializers.EmailField(
        max_length=127,
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="email already registered.",
            )
        ],
    )

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "url_image",
            "phone",
            "user_type",
            "password",
            "address",
            "date_of_birth",
            "skills",
            "diseases",
            "is_active",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        address_data = validated_data.pop("address", False)
        user = User.objects.create_user(**validated_data)
        if address_data:
            address = Address.objects.create(**address_data)
            user.address = address

        user.save()
        return user

    def update(self, instance, validated_data):
        address_data = validated_data.pop("address", False)
        if address_data:
            address, created = Address.objects.get_or_create(user=instance)
            for field, value in address_data.items():
                setattr(address, field, value)
            address.save()
            instance.address = address

        password = validated_data.pop("password", None)
        if password:
            instance.set_password(password)

        for field, value in validated_data.items():
            setattr(instance, field, value)

        instance.save()
        return instance
