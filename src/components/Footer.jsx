import { ArrowUp, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className= "py-12 px-4 bg-card relative border-t border-border mt12 pt-8 flex flex-wrap justify-between items-center">
            <div className="text-sm text-muted-foreground flex items-center gap-2"> 
            <i><Mail /></i> <p className="m-0">anthonypochapsky@gmail.com</p>
            </div>

            <div className="text-sm text-muted-foreground flex items-center gap-2"> 
            <i><Phone/></i> <p className="m-0">(416)-832-8225</p>
            </div>


            <a href="#about" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp />
            </a>
        </footer>
    );
};