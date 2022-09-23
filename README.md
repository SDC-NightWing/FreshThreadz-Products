# Fresh Threadz Ecommerce Product Microservice
Fresh threadz ecoomerce product microservice is deployed with AWS EC2 instances. It uses 2 t2 micro host servers, 1 postgreSQL database, and 1 nginx load-balancer. It supports 7k throughput average across four endpoints with 65ms latency and 0% error rate. 

## Details 

1. Database selection
- PostgresSQL was my database of choice because sequel databases supports indexing which improves look-up queries, as the product microservice is heavy on GET/read requests.
- Simple read request query from products table:
![Screen Shot 2022-09-23 at 3 05 17 PM](https://user-images.githubusercontent.com/106702313/192062900-d2ecf32b-d290-42b7-a4b6-6be013502e97.png)
- Foreign keys are index to reduce cross table look up. 

2. Deployement 
- The postgreSQL and the initial server were deployed on AWS EC2 instance on US west region. 
- At relatively low latency (< 70ms) the single server can handle 500 throughput with 0% error rate
![products 500](https://user-images.githubusercontent.com/106702313/192064364-1dc20963-9b24-4265-899d-7492f0116925.png)
- After adding a nginx load balancer and an additional t2 micro server 
