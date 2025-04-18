## Install Nginx Ingress Controller

1. from (https://kubernetes.github.io/ingress-nginx/deploy/#azure) -
since I am using AKS, I have to use the following command:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

2. check the pods:
```
kubectl get pods -n ingress-nginx
```

3. look for the pod name: (similar to)
ingress-nginx-controller-7959454c77-7497r

4. kubectl edit the pod:
```
kubectl edit -n ingress-nginx pod/ingress-nginx-controller-7959454c77-7497r
```

5. inside spec, ingressClass:
```
ingressClassName: nginx
```
you'll see its the same as the name of the ingress class name in the ingress yaml file. So this pod will watch for the ingress resource with the same ingress class name.
This is similar to k8s service and pod service discovery using labels and selectors.

6. A load balancer will be created for the ingress controller pod, which you can see in the azure portal.

7. you can also see the address in the ingress controller pod:
```
kubectl get ing
```

8. nslookup the address:
```
nslookup <address>
```

9. Let's do DNS mapping locally:
 a. In our case, we want to map it to bilalashraf.xyz, so nslookup bilalashraf.xyz
 b. copy the IP address given under non-authoritative section.
 c. sudo vim /etc/hosts
 d. add the IP address and the domain name.
 e. save and exit.
 f. the configuration will take effect after a few minutes.
 g. you can now access the application using the domain name.

