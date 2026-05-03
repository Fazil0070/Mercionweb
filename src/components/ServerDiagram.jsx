import { useState, useEffect } from 'react';
import './ServerDiagram.css';

export default function ServerDiagram() {
  const [activeNode, setActiveNode] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nodes = [
    {
      id: 'user',
      title: 'User',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      desc: 'Your website visitors',
      x: 10,
      y: 50,
      mobileX: 50,
      mobileY: 10
    },
    {
      id: 'cdn',
      title: 'CDN',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      desc: 'Global content delivery',
      x: 30,
      y: 30,
      mobileX: 25,
      mobileY: 25
    },
    {
      id: 'loadbalancer',
      title: 'Load Balancer',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16" />
          <path d="M12 4v16" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      desc: 'Traffic distribution',
      x: 30,
      y: 70,
      mobileX: 75,
      mobileY: 25
    },
    {
      id: 'webserver',
      title: 'Web Server',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      desc: 'LiteSpeed + NVMe',
      x: 50,
      y: 50,
      mobileX: 50,
      mobileY: 40
    },
    {
      id: 'database',
      title: 'Database',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      desc: 'MySQL + Redis',
      x: 70,
      y: 30,
      mobileX: 25,
      mobileY: 55
    },
    {
      id: 'storage',
      title: 'Storage',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      ),
      desc: 'NVMe SSD Storage',
      x: 70,
      y: 70,
      mobileX: 75,
      mobileY: 55
    },
    {
      id: 'backup',
      title: 'Backup',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      ),
      desc: 'Daily automated backups',
      x: 90,
      y: 50,
      mobileX: 50,
      mobileY: 75
    }
  ];

  const connections = [
    { from: 0, to: 1, id: 'conn-0-1' },
    { from: 0, to: 2, id: 'conn-0-2' },
    { from: 1, to: 3, id: 'conn-1-3' },
    { from: 2, to: 3, id: 'conn-2-3' },
    { from: 3, to: 4, id: 'conn-3-4' },
    { from: 3, to: 5, id: 'conn-3-5' },
    { from: 4, to: 6, id: 'conn-4-6' },
    { from: 5, to: 6, id: 'conn-5-6' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="server-diagram" id="infrastructure">
      <div className="diagram-bg-text">INFRA</div>
      <div className="diagram-header">
        <div className="section-label">
          <div className="section-label-line"></div>
          <span className="section-label-text">// Our Infrastructure</span>
        </div>
        <h2 className="section-title">
          BUILT ON<br />
          <span style={{ color: 'var(--red)' }}>SOLID GROUND.</span>
        </h2>
        <p className="section-desc diagram-desc">
          Enterprise-grade infrastructure designed for speed, reliability, and scalability.
          Every component optimized for performance.
        </p>
      </div>

      <div className="diagram-container">
        <svg className="diagram-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--red)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--red)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {connections.map((conn, i) => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            const fromX = isMobile ? fromNode.mobileX : fromNode.x;
            const fromY = isMobile ? fromNode.mobileY : fromNode.y;
            const toX = isMobile ? toNode.mobileX : toNode.x;
            const toY = isMobile ? toNode.mobileY : toNode.y;
            return (
              <line
                key={conn.id}
                x1={fromX}
                y1={fromY}
                x2={toX}
                y2={toY}
                className={`connection-line ${activeNode === conn.from || activeNode === conn.to ? 'active' : ''}`}
              />
            );
          })}
          {connections.map((conn, i) => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            if (activeNode === conn.from) {
              const fromX = isMobile ? fromNode.mobileX : fromNode.x;
              const fromY = isMobile ? fromNode.mobileY : fromNode.y;
              const toX = isMobile ? toNode.mobileX : toNode.x;
              const toY = isMobile ? toNode.mobileY : toNode.y;
              return (
                <circle
                  key={`packet-${conn.id}`}
                  r="1.5"
                  fill="var(--red)"
                  className="data-packet"
                >
                  <animateMotion
                    dur="1.5s"
                    repeatCount="indefinite"
                    path={`M${fromX},${fromY} L${toX},${toY}`}
                  />
                </circle>
              );
            }
            return null;
          })}
        </svg>

        {nodes.map((node, index) => (
          <div
            key={node.id}
            className={`diagram-node ${index === activeNode ? 'active' : ''}`}
            style={{
              left: `${isMobile ? node.mobileX : node.x}%`,
              top: `${isMobile ? node.mobileY : node.y}%`
            }}
            onMouseEnter={() => setActiveNode(index)}
          >
            <div className="node-icon">{node.icon}</div>
            <div className="node-info">
              <h3 className="node-title">{node.title}</h3>
              <p className="node-desc">{node.desc}</p>
            </div>
            <div className="node-pulse"></div>
            <div className="node-ring"></div>
          </div>
        ))}
      </div>

      <div className="diagram-features">
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h4>NVMe Storage</h4>
          <p>6x faster than traditional SSD</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌐</div>
          <h4>Global CDN</h4>
          <p>Edge locations worldwide</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h4>DDoS Protection</h4>
          <p>Enterprise-grade security</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💾</div>
          <h4>Daily Backups</h4>
          <p>Automatic & on-demand</p>
        </div>
      </div>
    </section>
  );
}
