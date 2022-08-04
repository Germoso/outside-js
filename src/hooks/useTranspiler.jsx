const useTranspiler = (code) => {
    while (code.match("console")) {
        code = code.replace("console", "outside_js")
    }
    return { code }
}

export { useTranspiler }
