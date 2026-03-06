from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer
from django.shortcuts import redirect
from django.conf import settings
from django.core.mail import EmailMultiAlternatives


# ==========================================================
# Public APIs (Used by the website frontend)
# ==========================================================

# GET approved reviews to display on the website
# Only reviews with is_approved=True will appear in the UI
@api_view(["GET"])
def get_reviews(request):
    reviews = Review.objects.filter(is_approved=True).order_by("-created_at")
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


# Submit a new review from the website form
# Review will be saved but NOT shown until the client approves it
@api_view(["POST"])
def add_review(request):

    serializer = ReviewSerializer(data=request.data)

    if serializer.is_valid():

        review = serializer.save()

        # Create links for email buttons
        # TODO: change to production domain after deployment
        approve_link = f"http://127.0.0.1:8001/api/reviews/approve/{review.id}/"
        delete_link = f"http://127.0.0.1:8001/api/reviews/delete/{review.id}/"

        # Plain text email (fallback)
        text_content = f"""
New review submitted

Name: {review.name}
Rating: {review.rating}

Comment:
{review.content}

Approve:
{approve_link}

Delete:
{delete_link}
"""

        # HTML email with buttons
        html_content = f"""
        <h2>New Review Submitted</h2>

        <p><strong>Name:</strong> {review.name}</p>
        <p><strong>Rating:</strong> {review.rating} ⭐</p>

        <p><strong>Comment:</strong></p>
        <p>{review.content}</p>

        <br>

        <a href="{approve_link}" 
        style="background:#28a745;color:white;padding:12px 20px;
        text-decoration:none;border-radius:6px;margin-right:10px;">
        Approve Review
        </a>

        <a href="{delete_link}" 
        style="background:#dc3545;color:white;padding:12px 20px;
        text-decoration:none;border-radius:6px;">
        Delete Review
        </a>
        """

        # Send email
        email = EmailMultiAlternatives(
            "New Review Submitted",
            text_content,
            settings.EMAIL_HOST_USER,
            [settings.REVIEW_NOTIFICATION_EMAIL],
        )

        email.attach_alternative(html_content, "text/html")
        email.send()

        return Response({"message": "Review submitted successfully"}, status=201)

    print(serializer.errors)
    return Response(serializer.errors, status=400)


# ==========================================================
# Email Actions (Triggered by email buttons)
# ==========================================================

# Approve review when client clicks the approve button in email
@api_view(["GET"])
def approve_review(request, review_id):

    review = Review.objects.get(id=review_id)
    review.is_approved = True
    review.save()

    # Redirect back to the website
    # TODO: change to production domain after deployment
    return redirect("http://localhost:5173")


# Delete review when client clicks delete button
@api_view(["GET"])
def delete_review(request, review_id):

    review = Review.objects.get(id=review_id)
    review.delete()

    # Redirect back to the website
    # TODO: change to production domain after deployment
    return redirect("http://localhost:5173")