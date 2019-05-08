#!/bin/bash

echo "***===============Downloading Consul Template===============***"
curl -O https://releases.hashicorp.com/consul-template/0.20.0/consul-template_0.20.0_linux_amd64.tgz
echo "***===============Unpacking Consul Template===============***"
tar -zxf consul-template_0.20.0_linux_amd64.tgz -C /usr/local/bin
echo "***===============Running Consul Template===============***"
consul-template -config="/sourcecode/master-node/consul-template.conf" -once
echo "***===============Cleaning *tgz files===============***"
rm consul-template_0.20.0_linux_amd64.tgz
echo "************************************************************"
echo "********************=============***************************"
echo "************************************************************"
echo "consul template started listening for file configuration changes"
echo "************************************************************"
echo "********************=============***************************"
echo "************************************************************"
echo "********************=============***************************"

