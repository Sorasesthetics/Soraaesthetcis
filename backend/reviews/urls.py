from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_reviews),
    path("add/", views.add_review),

    # actions used from email links
    path("approve/<int:review_id>/", views.approve_review),
    path("delete/<int:review_id>/", views.delete_review),
]