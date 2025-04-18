1. create a dns zone in azure:
```
az network dns zone create --name bilalashraf.xyz --resource-group portfolio-rg
```

2. get the name servers:
```
az network dns zone show --name bilalashraf.xyz --resource-group portfolio-rg --query nameServers -o tsv
```

3. Update Name Servers in my Domain Registrar :

- Log in to my domain registrar (where i purchased bilalashraf.xyz)
- Find the name server settings
- Replace the current name servers with the Azure DNS name servers i got in step 2
- Save the changes

4. get ingress controller's external ip:
```
kubectl get service ingress-nginx-controller -n ingress-nginx -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

5. create a dns record in azure dns:
```
# Create A record for root domain
az network dns record-set a add-record --resource-group portfolio-rg --zone-name bilalashraf.xyz --record-set-name "@" --ipv4-address <EXTERNAL_INGRESS_IP>

# Create A record for www subdomain
az network dns record-set a add-record --resource-group portfolio-rg --zone-name bilalashraf.xyz --record-set-name "www" --ipv4-address <EXTERNAL_INGRESS_IP>
```

6. verify dns propogation:
```
nslookup bilalashraf.xyz
```