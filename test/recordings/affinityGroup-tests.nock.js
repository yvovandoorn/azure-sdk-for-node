// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroup/afgrp1',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '22c19a01e1434bfc823bb6249b168b2f',
  date: 'Thu, 21 Feb 2013 03:20:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '95bdc57e587f4fab9499f9da38e97292',
  date: 'Thu, 21 Feb 2013 03:20:52 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups/!NotValid%24')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The affinity group does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '199',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0bc99f4a9063468ca84760708b815990',
  date: 'Thu, 21 Feb 2013 03:20:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '24e939786ede4990a5643cda98bd74a9',
  date: 'Thu, 21 Feb 2013 03:20:58 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups/afgrp1')
  .reply(200, "<AffinityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><HostedServices/><StorageServices/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup>", { 'cache-control': 'no-cache',
  'content-length': '342',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '80d492570bf44ecdbe6667049f55268d',
  date: 'Thu, 21 Feb 2013 03:20:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '23d539e835ab42bfb2108948e282d38a',
  date: 'Thu, 21 Feb 2013 03:21:03 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3a36ca79c12f4cbfbb776b1175ab85d1',
  date: 'Thu, 21 Feb 2013 03:21:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3ae23031ddc14495b7e5aa283cd87e8d',
  date: 'Thu, 21 Feb 2013 03:21:09 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups/!NotValid%24')
  .reply(400, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>BadRequest</Code><Message>The affinity group name is invalid.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '194',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd8b5c2ebe83546829f71fb406183eb55',
  date: 'Thu, 21 Feb 2013 03:21:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>afgrp1</Name><Label>YWZncnAx</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1831',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '85c8fc35e6b14cb88e4905db502d961e',
  date: 'Thu, 21 Feb 2013 03:21:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups/afgrp1')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5be00a0649e34e348398073ed6cd6e91',
  date: 'Thu, 21 Feb 2013 03:21:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/279b0675-cf67-467f-98f0-67ae31eb540f/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>createaffinitygroup</Name><Label>Y3JlYXRlYWZmaW5pdHlncm91cA==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>getaffinitygroupproperties</Name><Label>Z2V0YWZmaW5pdHlncm91cHByb3BlcnRpZXM=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries1</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMQ==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithmultipleentries2</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRobXVsdGlwbGVlbnRyaWVzMg==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>listaffinitygroupwithoneentry</Name><Label>bGlzdGFmZmluaXR5Z3JvdXB3aXRob25lZW50cnk=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>updateaffinitygroup</Name><Label>bmV3bGFiZWw=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '1626',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.13 (rd_rdfe_stable.130218-1312) Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5d07893b1f5a4ee5acf1fd1b6dffa6b8',
  date: 'Thu, 21 Feb 2013 03:21:20 GMT' });
 return result; }]];