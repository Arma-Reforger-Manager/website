export interface Logs {
    success: boolean
    results: [{
        token: string
        server: {
            ip: string
            port: number
            token: string
        }
    }]
}

export type LogSearchFormats = 
    'DYNAMIC.ENHANCED' | 
    'WEBSITE.TOKEN' | 
    'IPV4.PORT' | 
    'IPV4' | 
    'IPV6' | 
    'SERVER.TOKEN'
;