curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "test@test.com",
      "password": "test"
    }
  }'

echo

# curl --include --request PATCH http://localhost:3000/books/45 \
#   --header "Content-Type: application/json" \
#   --data '{
#     "book": {
#       "title": "an example title",
#       "author": "Rebekah"
#     }
#   }'
