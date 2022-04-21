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
    price_of_sale = models.FloatField(null=True, )
    date_add_product = models.DateTimeField(null=True, default=datetime.now())

    def __str__(self):
        return self.name
