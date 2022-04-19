from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from .models import *


def index(request):
    return render(request, "index.html")


# start category
def category(request):
    searches = Category.objects.all()

    if request.POST and request.POST.get("search"):
        search = request.POST.get("search")
        searches = searches.filter(category__icontains=search)
        if searches.filter(category__icontains=request.POST.get("search")):
            messages.success(request, "جميع النتائج")

    context = {
        "categories": Category.objects.all(),
        "searches": searches
    }
    return render(request, "category.html", context)


def add_category(request):
    if request.method == "POST":
        # num += 1
        categoryName = request.POST.get("category")
        Category.objects.create(category=categoryName)
        return redirect("category")
    return render(request, "add-category.html")


def update_category(request, category_id):
    if request.method == "POST":
        categoryName = request.POST.get("category")
        Category.objects.filter(id=category_id).update(category=categoryName)
        return redirect("category")
    context = {
        "update_category": Category.objects.get(id=category_id),
    }
    return render(request, "add-category.html", context)


def delete_category(request, category_id):
    Category.objects.filter(id=category_id).delete()
    return redirect("category")


# start users
def users(request):
    searches = User.objects.all()

    if request.POST and request.POST.get("search"):
        search = request.POST.get("search")
        searches = searches.filter(username__icontains=search)
        if searches.filter(username__icontains=request.POST.get("search")):
            messages.success(request, "جميع النتائج")

    context = {
        "users": User.objects.all(),
        "searches": searches
    }
    return render(request, "users.html", context)


def add_users(request):
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    roles = request.POST.get("roles")
    # print(roles == "Admin")
    if request.POST:
        if not User.objects.filter(username=username) and roles == "Admin":
            User.objects.create_superuser(
                username=username,
                email=email,
                password=password,

            )
            return redirect("users")

        elif not User.objects.filter(username=username) and roles == "User":
            User.objects.create_user(
                username=username,
                email=email,
                password=password,
                is_staff=True

            )
            return redirect("users")
        elif User.objects.filter(username=username):
            messages.error(request, "اسم المستخدم موجود مسبقا")
    return render(request, "add-users.html")


def update_users(request, users_id):
    username = request.POST.get("username")
    email = request.POST.get("email")
    password = request.POST.get("password")
    roles = request.POST.get("roles")
    if request.method == "POST":
        # print()
        try:
            if username and password:
                print(list(User.objects.all().exclude(username=username)))
                if roles == "Admin":
                    User.objects.filter(id=users_id).update(username=username, email=email, is_superuser=True)
                    user = User.objects.get(id=users_id)
                    user.set_password(password)
                    user.save()
                    return redirect("users")
                elif roles == "User" and password:
                    User.objects.filter(id=users_id).update(username=username, email=email, is_superuser=False)
                    user = User.objects.get(id=users_id)
                    user.set_password(password)
                    user.save()
                    return redirect("users")
        except:
            messages.error(request, "اسم المستخدم موجود مسبقا")

    context = {
        "update_users": User.objects.get(id=users_id),
    }
    return render(request, "add-users.html", context)


def delete_users(request, users_id):
    User.objects.filter(id=users_id).delete()
    return redirect("users")


# start products
def products(request):
    return render(request, "products.html")


def add_products(request):
    return render(request, "add-products.html")


#
# def update_products(request, products_id):
#     if request.method == "POST":
#         categoryName = request.POST.get("category")
#         Category.objects.filter(id=category_id).update(category=categoryName)
#         return redirect("category")
#     context = {
#         "update_category": Category.objects.get(id=category_id),
#     }
#     return render(request, "add-category.html", context)
#
#
# def delete_products(request, category_id):
#     Category.objects.filter(id=products_id).delete()
#     return redirect("category")


def sales(request):
    return render(request, "sales.html")


def add_sales(request):
    return render(request, "add-sales.html")
