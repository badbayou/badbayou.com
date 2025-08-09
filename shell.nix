{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    hugo
  ];

  shellHook = ''
    echo "Hugo development environment loaded!"
    echo "Available commands:"
    echo "  hugo version    - Check Hugo version"
    echo "  hugo new site   - Create a new Hugo site"
    echo "  hugo server     - Start development server"
    echo "  hugo            - Build static site"
    echo ""
    echo "Hugo version: $(hugo version)"
    echo "Node.js version: $(node --version)"
    echo "npm version: $(npm --version)"
  '';
}
