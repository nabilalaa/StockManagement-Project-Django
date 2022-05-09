from django.db import models
from datetime import datetime


class Category(models.Model):
    category = models.CharField(null=True, max_length=50)

    def __str__(self):
        return self.category

    class Meta():
        verbose_name = "categorie"


class Product(models.Model):
    image = models.ImageField(null=True)
    name = models.CharField(null=True, max_length=50)
    available = models.IntegerField(null=True)
    price_of_buy = models.FloatField(null=True)
    price_of_sale = models.FloatField(null=True)
    date_add_product = models.DateTimeField(null=True, default=datetime.now())

    def __str__(self):
        return self.name


class Sale(models.Model):
    name = models.CharField(null=True, max_length=50)
    date_of_purchase = models.DateTimeField(null=True, default=datetime.now())
    product = models.CharField(null=True, max_length=50)
    price_of_selling = models.FloatField(null=True)
    quantity = models.IntegerField(null=True)
    total = models.FloatField(null=True)
    f_total = models.FloatField(null=True)
    notes = models.TextField(null=True)

    def __str__(self):
        return self.name
