1. install argocd:
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

2. access argocd UI (loadbalancer service):
```
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
```

3. find the external IP and navigate to it in your browser:
```
kubectl get svc argocd-server -n argocd
```

4. login to argocd UI with username "admin", using the following command to get the initial password:
```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```