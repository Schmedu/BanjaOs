import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class BanjaOsStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // @ts-ignore
        const bucket = new s3.Bucket(this, process.env.S3_BUCKET_NAME, {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            enforceSSL: true,
        })

        // @ts-ignore
        const user = new iam.User(this, process.env.AWS_NEXT_USER, {
            userName: process.env.AWS_NEXT_USER,
        });

        bucket.grantPut(user);
    }
}
