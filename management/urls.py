from django.urls import path
from .views import *

urlpatterns = [
    path("", index, name="home"),
    # start category
    path("category", category, name="category"),
    path("add-category", add_category, name="add-category"),
    path("update/<int:category_id>", update_category, name="update_category"),
    path("delete/<int:category_id>", delete_category, name="delete_category"),
    # start users
    path("users", users, name="users"),
    path("add-users", add_users, name="add-users"),
    # path("update/<int:users_id>", update_users, name="update_users"),
    # path("delete/<int:users_id>", delete_users, name="delete_users"),
    # start products
    path("products", products, name="products"),
    path("add-products", add_products, name="add-products"),
    # path("update/<int:products_id>", update_products, name="update_products"),
    # path("delete/<int:products_id>", delete_products, name="delete_products"),
    # start sales
    path("sales", sales, name="sales"),
    path("add-sales", add_sales, name="add-sales"),
    # path("update/<int:sales_id>", update_sales, name="update_sales"),
    # path("delete/<int:sales_id>", delete_sales, name="delete_sales"),

]
