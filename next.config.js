/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:"/Subfolder",
    env:{
        API_KEY:"XYZ_123"
    },
    async headers(){
        return [
            {source:"/About",headers:[{key:"API_KEY",value:"23435VEFDF"},{key:"about_api",value:"qerqwrewre"}]}
        ]
    },
    images:{
        domains:['web.whatsapp.com','img.freepik.com']
    }
}

module.exports = nextConfig
