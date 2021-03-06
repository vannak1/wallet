// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"qattu00pt3","name":"ReactSample","description":"","endpoint":"https://qattu00pt3.execute-api.us-east-1.amazonaws.com/Development","region":"us-east-1","paths":["/items","/items/123"]}],
    'aws_cognito_identity_pool_id': 'us-east-1:06cf82cd-090f-44a8-9128-d034b21eb442',
    'aws_cognito_region': 'us-east-1',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'wallet-hosting-mobilehub-742885805',
    'aws_content_delivery_bucket_region': 'us-east-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd1oqa6hz06mgn8.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-east-1',
    'aws_dynamodb_table_schemas': [{"tableName":"wallet-mobilehub-742885805-bbq_orders","attributes":[{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"id"},{"tableName":"wallet-mobilehub-742885805-bbq_restaurants","attributes":[{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"id"},{"tableName":"wallet-mobilehub-742885805-bbq_menu_item","attributes":[{"name":"restaurant_id","type":"S"},{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"restaurant_id","rangeKey":"id"}],
    'aws_mandatory_sign_in': 'enable',
    'aws_project_id': '0a44347d-1ce3-40aa-bbf7-d11253ab89a6',
    'aws_project_name': 'wallet',
    'aws_project_region': 'us-east-1',
    'aws_resource_bucket_name': 'wallet-deployments-mobilehub-742885805',
    'aws_resource_name_prefix': 'wallet-mobilehub-742885805',
    'aws_sign_in_enabled': 'enable',
    'aws_user_files': 'enable',
    'aws_user_files_s3_bucket': 'wallet-userfiles-mobilehub-742885805',
    'aws_user_files_s3_bucket_region': 'us-east-1',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-east-1_fj27QUYK3',
    'aws_user_pools_mfa_type': 'ON',
    'aws_user_pools_web_client_id': '59bese1jgb75r1946a1qpbk9p4',
    'aws_user_settings': 'enable',
}

export default awsmobile;
