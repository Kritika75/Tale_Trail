from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.conf import settings
import requests

# Redirect user to Auth0 login/signup page (this handles registration as well)
def login_view(request):
    auth_url = f"https://{settings.AUTH0_DOMAIN}/authorize?" \
               f"response_type=code&client_id={settings.AUTH0_CLIENT_ID}" \
               f"&redirect_uri={settings.AUTH0_CALLBACK_URL}" \
               f"&scope=openid profile email"  # Add 'email' scope to retrieve user's email
    return redirect(auth_url)

# Callback view to handle the Auth0 response
def auth0_callback(request):
    code = request.GET.get("code")
    if not code:
        return redirect("login/")  # Redirect back to login if no code

    # Exchange authorization code for tokens
    token_url = f"https://{settings.AUTH0_DOMAIN}/oauth/token"
    token_data = {
        "grant_type": "authorization_code",
        "client_id": settings.AUTH0_CLIENT_ID,
        "client_secret": settings.AUTH0_CLIENT_SECRET,
        "code": code,
        "redirect_uri": settings.AUTH0_CALLBACK_URL,
    }
    token_headers = {"content-type": "application/json"}
    token_response = requests.post(token_url, json=token_data, headers=token_headers)
    tokens = token_response.json()

    # Get user information from Auth0
    user_url = f"https://{settings.AUTH0_DOMAIN}/userinfo"
    user_headers = {"authorization": f"Bearer {tokens['access_token']}"}
    user_response = requests.get(user_url, headers=user_headers)
    userinfo = user_response.json()

    # Store user info in session
    request.session['user'] = {
        "user_id": userinfo["sub"],  # Unique identifier for the user
        "name": userinfo["name"],
        "nickname": userinfo.get("nickname", ""),
        "picture": userinfo["picture"],
        "email": userinfo.get("email", ""),  # Store email if needed
    }

    return redirect("explore/")  # Redirect to the app's main page after successful login/signup

# Logout view that logs the user out of Django and Auth0
def logout_view(request):
    # Log out from Django session
    logout(request)

    # Redirect to Auth0 logout URL
    auth0_logout_url = f"https://{settings.AUTH0_DOMAIN}/v2/logout?client_id={settings.AUTH0_CLIENT_ID}" \
                       f"&returnTo={settings.AUTH0_CALLBACK_URL}"
    return redirect(auth0_logout_url)
