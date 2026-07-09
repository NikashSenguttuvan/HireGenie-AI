from app.auth.password import (
    hash_password,
    verify_password
)

password = "Nikash123"

hashed = hash_password(password)

print("Hash:", hashed)

print(
    verify_password(
        password,
        hashed
    )
)