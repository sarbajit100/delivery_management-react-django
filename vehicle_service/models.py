from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=100)
    repair_price = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)

class Vehicle(models.Model):
    license_plate = models.CharField(max_length=20)
    model = models.CharField(max_length=100)
    owner = models.CharField(max_length=100)

class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    is_repair = models.BooleanField()  # True if repair, False if new purchase
    description = models.TextField()

class Invoice(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    issues = models.ManyToManyField(Issue)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(auto_now_add=True)
