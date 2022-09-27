# Fresh Threadz Ecommerce Product Microservice
Fresh threadz ecoomerce product microservice is deployed with AWS EC2 instances. It uses 2 t2 micro host servers, 1 postgreSQL database, and 1 nginx load-balancer. It supports 7k RPS average across four endpoints with 65ms latency and 0% error rate. 

## Details 

### 1. Database selection
- PostgresSQL was my database of choice because sequel databases supports indexing which improves look-up queries, as the product microservice is heavy on GET/read requests.
- Simple read request query from products table:
![Screen Shot 2022-09-23 at 3 05 17 PM](https://user-images.githubusercontent.com/106702313/192062900-d2ecf32b-d290-42b7-a4b6-6be013502e97.png)
- Foreign keys are index to reduce cross table look up. 

### 2. Deployement 
- The postgreSQL and the initial server were deployed on AWS EC2 instance on US west region. 
- At low latency (< 70ms) the single server can handle 500 RPS with 0% error rate
![products 500](https://user-images.githubusercontent.com/106702313/192064364-1dc20963-9b24-4265-899d-7492f0116925.png)
- After adding a nginx load balancer and an additional t2 micro server, it was able to handle 1k RPS at low latency (< 70ms) with 0% error rate.
![products 1000](https://user-images.githubusercontent.com/106702313/192065576-417c4b70-e173-4cb0-b573-c6e756ca9d1c.png)

### 3. Optimization
- Caching was added to the nginx load balancer using the round robin / cycle through servers sequentially logic. I tested least connection logic caching as well but didn't see any major differences. 
- After caching the servers were able to handle 6.5k RPS with 0% error rate and <70 ms latency
![:products 6500](https://user-images.githubusercontent.com/106702313/192065846-9b3ca039-0a22-4e70-9dd7-052faa779172.png)

### Final thoughts 
- For further improvements, I could consider cloning databases and adding more servers to increase throughput and potentially decrease latency.
- Consider different load balancers and learn the pros & cons for each.
- Vertically scaling by using stronger computers, for this project I stuck to only t2 micros.

## Running this Repo
- `git clone` this repo onto local machine
- `npm install` 
- `npm start`

## Connect with me 
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kat-gao-30a0a1204/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/katto030)
