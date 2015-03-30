# node-paypal-ipn
NodeJS sample code to listen to Paypal IPN (Instant Payment Notification) and verify the message.

## How to install
```
npm install
```

## How to run
```
sudo npm start
```
We use port 80 for this listener, so Sudo access is required to start service.
You are recommended to redirect port 80 to other port (3000) so that `npm start` does not need sudo access. Refer to: http://proghowto.com/iptables-redirect-port-80-to-port-8080

## License
MIT
