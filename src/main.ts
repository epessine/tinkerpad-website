import './style.css';
import Alpine from 'alpinejs';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

declare global {
    interface Window {
        Alpine: typeof Alpine;
        tippy: typeof tippy;
    }
    interface Position {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }
    interface Size {
        width: number;
        height: number;
    }
}

window.Alpine = Alpine;
window.tippy = tippy;

Alpine.data('interactive', ({ position, content, size }: { position: Position, content: string, size: Size}) => ({
    init() {
        tippy(this.$el, { content });
        this.$el.style.bottom = position.bottom ? `${position.bottom}%` : 'unset';
        this.$el.style.left = position.left ? `${position.left}%` : 'unset';
        this.$el.style.right = position.right ? `${position.right}%` : 'unset';
        this.$el.style.top = position.top ? `${position.top}%` : 'unset';
        this.$el.style.width = `${size.width}%`;
        this.$el.style.height = `${size.height}%`;
        this.$el.classList.add('interactive');
    }
}));

Alpine.start();
