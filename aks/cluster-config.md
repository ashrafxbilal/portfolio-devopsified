1. Create a resource group:
```
az group create --name portfolio-rg --location eastus
```
2. Create a cluster:
```
az aks create \
  --resource-group portfolio-rg \
  --name portfolioCluster \
  --node-count 2 \
  --node-vm-size Standard_B2s \
  --load-balancer-sku standard \
  --vm-set-type VirtualMachineScaleSets \
  --enable-cluster-autoscaler \
  --min-count 1 \
  --max-count 3 \
  --network-plugin azure \
  --generate-ssh-keys
```

3.  Credentials to access your cluster:
```
az aks get-credentials --resource-group portfolio-rg --name portfolioCluster
```

4. Proceed to deploy the application.
```
kubectl apply -f k8s/manifests/
```