                                    MICROTECH
                                        |
                                        |
                                        |
                                       USER
                                        |
                                        |
                                    ---------
                                    |       |
                                 PARTNER   NORMAL
                                    |
                                    |
                                    |
                            ---------------
                            

SIGNUP
 - NORMAL  : default
 - PARTNER : optional
    - PROCESS:
        - Assign unique ID e.g http://notification.microtechcloud.co.zm/ID
        - Alt : 
            - generate token containing data e.g {
                owner_id: ID,
                uri_type: primary || secondary,
                organization_id: ID #if uri_type === secondary
            }

PROCESS
1. generate uri for user e.g notification.microtechcloud.co.zm/ID



PARTNER
 - Create Organization
    - Process:
        - generate unique ID 
            - Usage:
                notification.microtechcloud.co.zm/ID/orgID
             - Alt : 
                - notification.microtechcloud.co.zm/token


NORMAL USERS
 - features 
    - send single sms
    - sendbulk sms by:
        - uploading csv
        - text file
        - manually enter contacts
    - sms templates
    - favourite sms templates
    - outbox
    - start compaign
    - schedule sms
    - create Sender ID 

PARTNERS

 - features
    - Normal Users Features
    - create/edit/delete/suspend organization / client accounts
        - Create Sender IDs according to organization roles
    - run campaigns for specicific clients / organizations



#TODO

- create schedule schema
- create OTP schema