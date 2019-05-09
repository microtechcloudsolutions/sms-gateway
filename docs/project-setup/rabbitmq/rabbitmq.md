# RabbitMQ Setup

The SMS Gateway is made up of several independent microservices working together to fulfil user requests.
Services emit events and messages which other services in the cluster can consume and work on. these messages stored in queues and forwarded to available consuming services listening for messages and events on those queues

#Installation
- Docker
- On bare metal

# Policy
In order to maintain a standard protocol of communcation among services, the rabbitmq will adhere  to standard naming conventions of queues and exchanges

# Virtual Host
Different teams will be working on different versions of the software.
To segregate these versions, teams will make use of virtual hosts eg,
    - development team
    - Production Team
    - Testing Team

# Exchanges
As a way of segregating mesasges and events belonging to specific domains or span across several specific domains; exchanges will be used.
 - Exchange Schema:
    - type: fanout | direct | topic
    - name : domain

# Queues
All Commands and events will be stored in queues.
 - Queue Schema:
    - type: durable | transient
    - name: event domain | command domain
    - routing_key: event name  | message name


# Domains
check available [![Domains]](../domain.md) here

# Commands
these are instructions for a particular service to perfom an action eg. create a user

# Events
These are events fired after an action has been perfomed e.g user created.
Any service willing to perfom actions after any other action is perfomed can listen to events.
