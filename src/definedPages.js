class LinkObj {
    constructor(displayName, pathName) {
        this.displayName = displayName;
        this.pathName = pathName;
    }
}

const definedPages = [
    new LinkObj('Home', '/'), 
    new LinkObj('Contact Us', '/contact'), 
    new LinkObj('About Us', '/about'), 
    new LinkObj('Sign In', '/signin')];

export default definedPages;
