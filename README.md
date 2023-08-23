# Plan

I will be following the general structure of cloud resume challenge by Forrest Brazeal. 

| Week | Challenge Milestone | Description | Estimated Time |
|------|---------------------|-------------|----------------|
| Week 0: Certification Prep (Challenge Step 1) | Complete a Certified Cloud Practitioner prep course and practice exam | 10ish hours |
| Week 1: Front End (Challenge Steps 2-6) | Get your resume laid out in HTML. Style it with CSS. Get the website deployed to S3 and fronted with DNS / CloudFront. | 5-10ish hours |
| Week 2: Back-End API (Challenge Steps 8-10, 13) | Get source control set up. Get the visitor counter saving to the database. | 10ish hours |
| Week 3: Front-End / Back-End Integration (Challenge Steps 7, 11) | Get the visitor counter displaying on the homepage. Add tests for your code. | 10-15ish hours |
| Week 4: Automation / CI (Challenge Steps 12,14,15) | Get your infrastructure automated with SAM and deploying via GitHub Actions. | 10ish hours |
| Week 5: The Blog … and Beyond (Challenge Steps 1,16) | Sit and pass CCP exam. Write blog post. Celebrate! | as much time as you want/need |

The project is bootstrapped using `create-next-app`. I will be discussing the design decisions on the [blog post](https://github.com)

## Credits
Shark for designing the frontend 
Iconfinder for social media icons - https://www.iconfinder.com/. Hotlinking using their cdn link.

Packages used:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- tailwindcss
- postcss
- autoprefixer
- eslint
- eslint-config-next
- framer-motion: Animations


### Bucket policy
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::www.neerrai.com"
        }
    ]
}
```

## CORS policy
```
[
    {
        "AllowedOrigins": ["*"],
        "AllowedMethods": ["GET"],
        "MaxAgeSeconds": 3000,
        "AllowedHeaders": ["*"]
    }
]

```
