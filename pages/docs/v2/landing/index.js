import Layout from '../../../../components/layout/layout'

export default function Landing() {
  return (
    <Layout>
      <main>
        <section className="hero-section">
          <h1>Docs</h1>
        </section>
      </main>
      <style jsx>{`
        .hero-section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 335px;
          background-color: rgba(250, 250, 250);
        }
        .hero-section h1 {
          font-size: 36px;
        }
      `}</style>
    </Layout>
  )
}
