from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *


def index(request):
    return render(request, "index.html")


# start category
def category(request):
    searches = AddCategory.objects.all()

    if request.POST:
        search = request.POST.get("search")
        searches = searches.filter(category__icontains=search)
        if not searches.filter(category__icontains=request.POST.get("search")):
            print(request.POST.get("search"))

            messages.success(request, "لايوجد نتيجة")
        else :
            # print(request.POST.get("search"))

            messages.success(request, " نتيجة")

    context = {
        "categories": AddCategory.objects.all(),
        "numbers": AddCategory.objects.count(),
        "searches": searches
    }
    return render(request, "category.html", context)


def add_category(request):
    if request.method == "POST":
        # num += 1
        categoryName = request.POST.get("category")
        AddCategory.objects.create(category=categoryName)
        return redirect("category")
    return render(request, "add-category.html")


def update_category(request, category_id):
    if request.method == "POST":
        categoryName = request.POST.get("category")
        AddCategory.objects.filter(id=category_id).update(category=categoryName)
        return redirect("category")
    context = {
        "update_category": AddCategory.objects.get(id=category_id),
    }
    return render(request, "add-category.html", context)


def delete_category(request, category_id):
    AddCategory.objects.filter(id=category_id).delete()
    return redirect("category")


# start users
def users(request):
    return render(request, "users.html")


def add_users(request):
    return render(request, "add-users.html")


# start products
def products(request):
    return render(request, "products.html")


def add_products(request):
    return render(request, "add-products.html")


#
# def update_products(request, products_id):
#     if request.method == "POST":
#         categoryName = request.POST.get("category")
#         AddCategory.objects.filter(id=category_id).update(category=categoryName)
#         return redirect("category")
#     context = {
#         "update_category": AddCategory.objects.get(id=category_id),
#     }
#     return render(request, "add-category.html", context)
#
#
# def delete_products(request, category_id):
#     AddCategory.objects.filter(id=products_id).delete()
#     return redirect("category")


def sales(request):
    return render(request, "sales.html")


def add_sales(request):
    return render(request, "add-sales.html")
