import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="rounded-full"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-foreground" />
      ) : (
        <Sun size={20} className="text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;