# book-online-tickets

API-REST (NODE-EXPRESS-MONGOOSE)

## Initialization

Run the `npm i` command and create the `.env` file in the root of the project.

To turn on the server run the command `nodemon server`.

Attention: I recommend trying this project on [POSTMAN](https://www.postman.com/).

- Create account and database in [Mongodb Atlas](https://cloud.mongodb.com/). 
- Extract the URL from Mongodb Atlas and create the `DBURL` value in the `.env` file.
![image](https://user-images.githubusercontent.com/20377552/175453636-9dcb973a-a417-4fed-8e5e-6c4a1a12ec9c.png)

## Endpoints

  GET- `localhost:3000/booking/{booking_id}`
  
  **Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `booking_id` | required | MongoID  | Booking ID.                                                                     

  
 **cURL Example**
 
```
curl --location --request GET 'localhost:3000/booking/62b520f806f7e840d32d8d20'
```
 
  ___
  POST- `localhost:3000/create_booking`
  
 
  **Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | User Name.                                                                     
|     `email` | required | string  | User Email.   
|     `origin` | required | string  | Origin of the trip.   
|     `destination` | required | string  | Destination of the trip.                                                                     
|     `departure` | required | date  | Departure of the trip in ISO format.   
|     `duration` | required | number  | Duration of the trip in minutes. 
  
 **cURL Example**
 
 ```
 curl --location --request POST 'localhost:3000/create_booking' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=José' \
--data-urlencode 'email=email@email.com' \
--data-urlencode 'origin=Punta del Este' \
--data-urlencode 'destination=Montevideo' \
--data-urlencode 'departure=2022-01-26T13:51:50.417-07:00' \
--data-urlencode 'duration=60'
```
 
  ___
  PUT- `localhost:3000/update_booking`
  
   
  **Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | MongoID  | Booking ID.  
|     `name` | optional | string  | User Name.                                                                     
|     `email` | optional | string  | User Email.   
|     `origin` | optional | string  | Origin of the trip.   
|     `destination` | optional | string  | Destination of the trip.                                                                     
|     `departure` | optional | date  | Departure of the trip in ISO format.   
|     `duration` | optional | number  | Duration of the trip in minutes. 
  
 **cURL Example**
 
 ```
curl --location --request PUT 'localhost:3000/update_booking' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id=62b520f806f7e840d32d8d20' \
--data-urlencode 'origin=Durazno' \
--data-urlencode 'duration=150'
```
 ___
  
  DELETE- `localhost:3000/delete_booking`
  
  
  **Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | MongoID  | Booking ID.                                                                     

  
 **cURL Example**
 
 ```
curl --location --request DELETE 'localhost:3000/delete_booking' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id=62b520f806f7e840d32d8d20'
```
  
